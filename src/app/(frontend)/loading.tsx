import LoadingPage from '@/avuny/components/layout/loading/loading-page'
import { Spinner } from '@/components/ui/spinner'

export default function Page() {
  return (
    <div className=" min-h-screen w-full flex flex-col justify-center items-center">
      <Spinner className="size-10 text-blue-500" />
    </div>
  )
}
