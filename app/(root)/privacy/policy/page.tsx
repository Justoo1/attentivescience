import RenderEditorComponent from '@/components/RenderEditorComponent'
import { policy } from '@/constants'

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col px-8 md:px-12 2xl:px-36 bg-[#f6f8fd] pb-10">
        <RenderEditorComponent content={policy} bgColor="#f6f8fd" />
    </div>
  )
}

export default PrivacyPolicy