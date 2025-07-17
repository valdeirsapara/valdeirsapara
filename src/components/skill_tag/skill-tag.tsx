
interface props {
    text:string
}

export default function SkillsTags({text}:props) {
    return (
        <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-green-500/65 shadow-2xl shadow-amber-200 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-stone-50">{text}</span>
        </div>
    )
}