import brokerData from '../data/brokerSelection.json'
import brokerIconData from '../data/brokerIcons.json'

//building error issues(resolved by ths)
const resolveImageSrc = (imagePath?: string) => {
  if (!imagePath) {
    return ''
  }

  const normalizedPath = imagePath.replace(/^\//, '')
  return encodeURI(`${import.meta.env.BASE_URL}${normalizedPath}`)
}

interface BrokerFileSelectionProps {
  brokerId: number
  onBack: () => void
}

export default function BrokerFileSelection({
  brokerId,
  onBack,
}: BrokerFileSelectionProps) {
  const broker = brokerData.brokers.find((item) => item.id === brokerId)
  const brokerImage =
    brokerIconData.brokerImageMap[
      brokerId as unknown as keyof typeof brokerIconData.brokerImageMap
    ]
  const brokerImageSrc = resolveImageSrc(brokerImage)

  if (!broker) {
    return null
  }

  return (
    <div className="flex-1 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-linear-to-r from-[#d5dce8] via-[#b8c5dc] to-[#8498bc] px-8! py-5!">
        <h2 className="text-lg! font-bold text-gray-900">Select Broker File</h2>
      </div>

      <div className="bg-white px-8! py-8!">
        <h3 className="text-xl! font-bold text-gray-900 mb-6!">
          Instruction to Download
        </h3>

        <div className="border border-gray-200 rounded-xl p-6 flex items-center justify-center flex-col mb-6 min-h-33">
          <img
            src={brokerImageSrc}
            alt={broker.name}
            className="max-h-10 max-w-full object-contain"
            loading="lazy"
          />
          <span className="mt-2 text-md! font-medium text-gray-800 leading-snug text-center">
            {broker.name}
          </span>
        </div>

        <p className="text-md! leading-relaxed text-gray-800 mb-4 mt-3!">
          Download the Excel Report from portal and upload in Step 3 below. Read{' '}
          <a href="#" className="text-blue-500 hover:underline">
            detailed instructions here.
          </a>
        </p>

        <ol className="list-decimal pl-10 text-md! text-gray-800 leading-normal space-y-1 mb-6!">
          <li>1. Sign in to your {broker.name} account.</li>
          <li>
            2. Go to Reports and choose either "Capital Gains - Mutual Funds" or
            "Capital Gains - Stocks", depending on your investments.
          </li>
          <li>3. Select the Financial Year relevant to your tax filing.</li>
          <li>4. Simply click the Download button to get the report.</li>
        </ol>

        <div className="border-b border-gray-200 my-10"></div>

        <h3 className="text-lg! mt-6! font-bold text-gray-900 mb-3">
          Review and File
        </h3>
        <p className="text-md! text-gray-500 mb-6">
          Upload the excel (*.xlsx or *.xls file downloaded as described in step
          2 above.)
        </p>

        <label
          className="block text-base! text-gray-400 mb-2"
          htmlFor="broker-file"
        >
          File input example
        </label>
        <input
          id="broker-file"
          type="file"
          accept=".xls,.xlsx"
          className="w-full my-4! border border-gray-300 rounded-md text-base! text-gray-700 file:mr-5 file:border-0 file:border-r file:border-gray-300 file:bg-blue-50 file:text-blue-600 file:px-6 file:py-3"
        />

        <button
          type="button"
          onClick={onBack}
          className="mt-10 text-gray-500 hover:text-blue-600 text-sm!"
        >
          ‹ Previous step
        </button>
      </div>
    </div>
  )
}
