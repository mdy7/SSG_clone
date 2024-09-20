type ClipEditButtonProps = {
  onEditMode: () => void
}

export default function ClipEditButton({ onEditMode }: ClipEditButtonProps) {
  return (
    <button
      className="border border-zinc-200 rounded bg-white flex flex-row px-2 py-1 items-center"
      onClick={onEditMode}
    >
      <div className="bg-[url('https://sui.ssgcdn.com/ui/m_ssg/img/sprites/sp_mylike_20240208@2x.png')] bg-[position:-164px_-77px] w-[15px] h-[15px] bg-[length:180px_147px]"></div>
      <div className="pl-1 text-[11px]">편집</div>
    </button>
  )
}
