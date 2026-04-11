import { YesNoToggle } from "@/components/web/yes-no-toggle"
import { useEffect, useState } from "react"



export type AnswerNode = {
    id: string
    level: number
    question?: string
    description?: string
    answer?: "yes" | "no" | undefined
    noNode?: AnswerNode
    yesNode?: AnswerNode
    suggestedAnswer?: string
}


const helpMeDecideQuestionsData = [

    {
        id: "1",
        level: 0,
        question: "Did {nameParam} stay in India for 182 days (not necessary continuously) or more during financial year {financialYearParam} ?",
        description: "",
        answer: undefined as "yes" | "no" | undefined,
        noNode: {
            id: "1.0",
            level: 1,
            question: "Did {nameParam} being Indian Citizen or Person of Indian Origin (PIO) visit India during the financial year {financialYearParam} or went for employment / as a member of crew of an Indian ship outside India?",
            description: "",
            answer: undefined as "yes" | "no" | undefined,
            noNode: {
                id: "1.0.0",
                level: 2,

                question: "Did {nameParam} stay in India for 60 days (not necessary continuously) or more during financial year {financialYearParam} and stay in India for 365 days or more during the last four years period i.e between 1st April {startYearParam} and 31st March {endYearParam} ?",
                description: "",
                answer: undefined as "yes" | "no" | undefined,
                noNode: {
                    id: "1.0.0",
                    level: 2,
                    suggestedAnswer: "NOR"
                },
                yesNode: {
                    id: "1.0.0.1",
                    level: 3,
                    question: "Did Saikat Roy was resident of India for at least 2 years out of last 10 years between 1st April 2014 and 31st March 2024 ?",
                    description: "",
                    answer: undefined as "yes" | "no" | undefined,
                    noNode: {
                        id: "1.1.0",
                        level: 4,
                        suggestedAnswer: "NOR",
                    },
                    yesNode: {
                        id: "1.1.1",
                        level: 4,
                        question: "Did Saikat Roy stay in India for 730 days (not necessary continuously) or more during last 7 years between 1st April 2017 and 31st March 2024 ?",
                        description: "",
                        answer: undefined as "yes" | "no" | undefined,
                        noNode: {
                            id: "1.1.1.0",
                            level: 5,
                            suggestedAnswer: "NOR",
                        },
                        yesNode: {
                            id: "1.1.1.1",
                            level: 5,
                            suggestedAnswer: "NOR",
                        }
                    },


                },

            },
            yesNode: {
                id: "1.0.1",
                level: 2,
                suggestedAnswer: "NRI",
            },

        },
        yesNode: {
            id: "1.1",
            level: 1,
            question: "Did {nameParam} was resident of India for at least 2 years out of last 10 years between 1st April 2014 and 31st March 2024 ?",
            description: "",
            answer: undefined as "yes" | "no" | undefined,
            noNode: {
                id: "1.1.0",
                level: 2,
                suggestedAnswer: "NOR",
            },
            yesNode: {
                id: "1.1.1",
                level: 2,
                question: "Did Saikat Roy stay in India for 730 days (not necessary continuously) or more during last 7 years between 1st April 2017 and 31st March 2024 ?",
                description: "",
                answer: undefined as "yes" | "no" | undefined,
                noNode: {
                    id: "1.1.1.0",
                    level: 3,
                    suggestedAnswer: "NOR",
                },
                yesNode: {
                    id: "1.1.1.1",
                    level: 3,
                    suggestedAnswer: "NOR",
                }
            },

        }
    }
]
type Props = {
    answer: string,
    setAnswer: (value: string) => void,
}

const HelpMeDecide = ({ answer, setAnswer }: Props) => {
    const [questionsState, setQuestionsState] = useState<AnswerNode[]>(() =>
        structuredClone(helpMeDecideQuestionsData)
    )
    const [decidedResidentialStatus, setDecidedResidentialStatus] = useState<string | null>(null)

    useEffect(() => {
        // console.log("Answer: ", answer)
        if (answer !== "HELP_ME_DECIDE") {

            // return

        }
        setAnswer("HELP_ME_DECIDE")
        setQuestionsState(structuredClone(helpMeDecideQuestionsData))
        setDecidedResidentialStatus(null)

    }, [answer])


    return (
        <>
            {decidedResidentialStatus && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded">
                    <p className="text-md text-green-800">Suggested Residential Status : {decidedResidentialStatus}</p>
                </div>
            )
            }
            {
                answer === "HELP_ME_DECIDE" && (
                    <div className="space-y-6">
                        {questionsState.map((q) => (
                            <QuestionComponent key={q.id}
                                question={q} questionsState={questionsState}
                                setQuestionsState={setQuestionsState}
                                setAnswer={setAnswer} setDecidedResidentialStatus={setDecidedResidentialStatus}
                            />
                        ))}
                    </div>
                )}

            {/* <pre className="mt-6 p-4 bg-gray-100 rounded overflow-x-auto">
                {JSON.stringify(questionsState, null, 2)}
            </pre> */}
        </>

    )
}

const QuestionComponent = ({ question, questionsState, setQuestionsState, setAnswer, setDecidedResidentialStatus }: { question: any, questionsState: any, setQuestionsState: any, setAnswer: any, setDecidedResidentialStatus: any }) => {

    const updateNode = (node: any, questionId: string, answer: "yes" | "no"): any => {
        if (!node) return node

        //need to check questionId in nested nodes and update answer accordingly

        if (node.id === questionId) {
            // console.log("Updating node ", node)
            if (answer === "yes" && node.yesNode?.suggestedAnswer) {
                setDecidedResidentialStatus(node.yesNode.suggestedAnswer)
                setAnswer(node.yesNode.suggestedAnswer)
            } else if (answer === "no" && node.noNode?.suggestedAnswer) {
                setDecidedResidentialStatus(node.noNode.suggestedAnswer)
                setAnswer(node.noNode.suggestedAnswer)
            }

            return {
                ...node,
                answer,
            }
        }

        return {
            ...node,
            yesNode: updateNode(node.yesNode, questionId, answer),
            noNode: updateNode(node.noNode, questionId, answer),
        }
    }

    const handleAnswer = (questionId: string, answer: "yes" | "no") => {
        //setAnswer("HELP_ME_DECIDE")

        questionsState.forEach((q: any) => {
            const updatedNode = updateNode(q, questionId, answer)


            q.yesNode = updatedNode.yesNode
            q.noNode = updatedNode.noNode
            if (q.id === updatedNode.id) {
                q.answer = updatedNode.answer
            }
        })
        const updated = [...questionsState]

        setQuestionsState(updated)
    }
    return (
        <>
            {!question.suggestedAnswer && (
                <div className="grid grid-cols-[1fr_auto] justify-center items-start gap-6">
                    <p className="text-md">{question.question}</p>
                    <div className="mt-4 space-x-4">
                        <YesNoToggle
                            value={question.answer}
                            onChange={(value) => handleAnswer(question.id, value)}
                        />
                    </div>
                </div>
            )}
            {question.answer && question[`${question.answer}Node`] && (
                <QuestionComponent question={question[`${question.answer}Node`]} questionsState={questionsState} setQuestionsState={setQuestionsState} setAnswer={setAnswer} setDecidedResidentialStatus={setDecidedResidentialStatus} />
            )}
            {/* {question.answer && question[`${question.answer}Node`] && question[`${question.answer}Node`].suggestedAnswer && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
                    <p className="text-md text-green-800">Suggested Residential Status : {question[`${question.answer}Node`].suggestedAnswer}</p>
                </div>
            )} */}
        </>
    )
}

export default HelpMeDecide
export { helpMeDecideQuestionsData }