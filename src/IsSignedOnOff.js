import React from 'react';

function IsSignedOnOff(props) {
	console.log(props.signonStatus)
	return (
	 	<div>
  		{ props.signonStatus ? <h1>Signed On</h1> : <h1>Signed Off</h1> }
  		{ props.signonStatus ? <button onClick={props.handelClick}>Sign Off</button> : <button onClick={props.handelClick}>Sign On</button> }
  	</div>
  )
}

export default IsSignedOnOff;