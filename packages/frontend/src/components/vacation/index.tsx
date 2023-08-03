import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/atoms/tabs'
import RequestForm from './requestform'
import TrackVacation from './trackvacation'

const VacationDetails = () => {
  return (
    <div className='w-full rounded shadow-lg bg-white p-[15px]'>
      <div className='flex justify-center w-full gap-x-[10px]'>
        <div className='flex flex-col items-center justify-center w-52 p-3 text-white bg-jungle-400 rounded shadow-lg'>
          <span className='text-lg font-semibold'>24</span>
          <span className='text-sm'>No of Vacations</span>
        </div>
        <div className='flex flex-col items-center justify-center w-52 p-3 text-white bg-blue-400 rounded shadow-lg'>
          <span className='text-lg font-semibold'>0</span>
          <span className='text-sm'>No of Loss of Pay Token</span>
        </div>
      </div>
      <div className='flex justify-center w-full p-[15px]'>
        <Tabs
          defaultValue='request'
          className='w-full max-w-[800px] px-[10px] py-[40px] rounded shadow-2xl'
        >
          <TabsList className='grid w-full grid-cols-2'>
            <TabsTrigger value='request'>Request</TabsTrigger>
            <TabsTrigger value='track'>Track</TabsTrigger>
          </TabsList>
          <TabsContent className='w-full' value='request'>
            <RequestForm />
          </TabsContent>
          <TabsContent className='w-full' value='track'>
            <TrackVacation />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default VacationDetails
