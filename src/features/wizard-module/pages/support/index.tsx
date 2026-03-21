import Header from '../home/components/header'
import Footer from '../home/components/footer'
import SupportHero from './components/SupportHero'
import SupportOptions from './components/SupportOptions'
import WorkingHours from './components/WorkingHours'
import HolidayList from './components/HolidayList'
import supportData from './data/support-data.json'

const Support = () => {
  const {
    header,
    supportOptions,
    regularWorkingHours,
    extendedWorkingHours,
    holidayList,
  } = supportData

  return (
    <>
      <Header />
      <div className="body bg-white text-slate-800">
        <SupportHero title={header.title} subtitle={header.subtitle} />
        <SupportOptions options={supportOptions} />
        <WorkingHours
          regularTitle={regularWorkingHours.title}
          regularPeriods={regularWorkingHours.periods}
          extendedTitle={extendedWorkingHours.title}
          extendedPeriods={extendedWorkingHours.periods}
        />
        <HolidayList
          title={holidayList.title}
          holidays={holidayList.holidays}
        />
      </div>
      <Footer />
    </>
  )
}

export default Support
