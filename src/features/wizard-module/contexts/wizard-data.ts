export const startQuestions = [
    {
        id: 1,
        question: "Did you earn salary / pension?",
        description: "Salary includes income earned from employment, salary pension, salary arrears",
        answer: undefined as "yes" | "no" | undefined
    },
    {
        id: 2,
        question: "Do you Own House Property?",
        description: "House Property includes flat, House, Bungalow, etc.",
        answer: undefined as "yes" | "no" | undefined
    },
    {
        id: 3,
        question: "Did you earn any Interest / Dividend Income?",
        description: "Interest received from Banks, Post office or others",
        answer: undefined as "yes" | "no" | undefined
    },
    {
        id: 4,
        question: "Income from Crypto Currency?",
        description: "If you have transferred or sold any crypto currency like BitCoin, Ether, DodgeCoin, Arthur, etc.",
        answer: undefined as "yes" | "no" | undefined
    },
    {
        id: 5,
        question: "Income from Business, Profession or Freelancing, etc.",
        description: "Income from sale of goods, share trading business, Transport business, freelancing, architect, medical profession, consultancy or any other business or Profession",
        answer: undefined as "yes" | "no" | undefined
    },
    {
        id: 6,
        question: "Do you hold Directorship position?",
        description: "If you are a director in a private or public limited company",
        answer: undefined as "yes" | "no" | undefined
    },
    {
        id: 7,
        question: "Do you own unlisted shares?",
        description: "If you have shareholding in any company which is not listed on any stock exchange",
        answer: undefined as "yes" | "no" | undefined
    },
    {
        id: 8,
        question: "Any other Income",
        description: "Other Income like Family Pension, Agricultural Income, Rent on letting-out of machinery, etc.",
        answer: undefined as "yes" | "no" | undefined,
        optionalQuestions: [
            {
                id: 8.1,
                question: "Family Pension",
                description: "Pension received on behalf of a deceased pensioner, being his legal heir",
                answer: undefined as "yes" | "no" | undefined
            },
            {
                id: 8.2,
                question: "Tax Free Income",
                description: "PPF Interest, Dividend Income is taxable from F.Y 2021-22, etc are not taxable",
                answer: undefined as "yes" | "no" | undefined
            },
            {
                id: 8.3,
                question: "Income from Lottery winnings, etc.",
                description: "Lottery or winning from other games, commission Income, etc.",
                answer: undefined as "yes" | "no" | undefined
            },

        ]
    },
]

export const deductionQuestions = [
    {
        id: 1,
        question: "Deductions",
        description: "Only pension funds (NPS)",
        answer: undefined as "yes" | "no" | undefined
    },
    {
        id: 2,
        question: "Tax Relief on Salary arrears received",
        description: "Tax Relief u/s 89 is applicable if you have received arrears of Salary. Select “Yes” if you have received any portion of salary(including pension and gratuity) pertaining to earlier years in 2024-25 and tax relief u/s 89 is to be claimed on it.",
        answer: undefined as "yes" | "no" | undefined
    },
    {
        id: 3,
        question: "Tax Relief on Taxes paid outside India",
        description: "Select \"Yes\" if you have earned any Income outside India.",
        answer: undefined as "yes" | "no" | undefined
    }

]

