const LPreScriptionRow = (props) => {
  const classNameField =
    props.fieldType === 1
      ? "pre-blue"
      : props.fieldType === 2
      ? "pre-blue pre-blue--has"
      : "pre-orange pre-blue--has";
  const classNameContext =
    props.contextType === 1
      ? "pre-text__cmt"
      : props.contextType === 2
      ? "pre-text__w100 pre-text__w100--pl"
      : "pre-text__w100 pre-text__w100--fs10";
  return (
    <li className={classNameField}>
      <div className="pre-text__label">
        <span className="pre-name">{props.header}</span>
      </div>
      <div className={classNameContext}>
        props.data.map((item) => {
            return (
                <p className="pre-element">{item.key}</p>
            )
        })
       
      </div>
    </li>
  );
};

export default LPreScriptionRow;

// Prop: Header Text
const physicalFeatures = [
    {
      recordID: 6,
      createTime: "2022-11-06 20:12:58",	
      shortFeature: "Test",
    },
    {
      recordID: 7,
      createTime: "2022-11-06 20:12:60",	
      shortFeature: "Test",
    },
    {
      recordID: 8,
      createTime: "2022-11-06 20:11:60",	
      shortFeature: "Test",
    },
    {
      recordID: 9,
      createTime: "2022-11-06 19:12:59",	
      shortFeature: "Test",
    },
    {
      recordID: 7,
      createTime: "2022-11-05 20:10:60",	
      shortFeature: "Test",
    }
  ] 					
  const getDateTime = (dateTime) => {
    const arr = dateTime.split(/-|\s|:/);
    return new Date(arr[0], arr[1] -1, arr[2], arr[3], arr[4], arr[5]); 
  }
  
  const sortedAsc = physicalFeatures.sort(
    (objA, objB) => Number(getDateTime(objA.createTime)) - Number(getDateTime(objB.createTime)),
  );
  console.log(sortedAsc)