interface Tab { 
    key : string, 
    tab : object , 
    handleClick :  () => void, 
    isFilterTab? : boolean , 
    isActiveTab? : string
}
export default function Tab(props: Tab) {
  return (
    <div>Tab</div>
  )
}
