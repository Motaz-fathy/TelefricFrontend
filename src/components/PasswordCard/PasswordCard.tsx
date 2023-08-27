import React from 'react'
import classes from "./PasswordCard.module.css";
import OtpInput from "react-otp-input";
import ProfileButtom from 'components/ProfileButtom/ProfileButtom';
const PasswordCard = () => {
  return (
    <div className={classes.passwordCard}>
      <h2>Change password</h2>
        <div className={classes.passInput}>
          <label>Current password *</label>
          <OtpInput
				
								inputStyle={{
									height: "3.2rem",
									width: "3.2rem",
	 								border: "1px solid #ECECEC",
	 								borderRadius: 4,
	 								color: "text-neutral-800 dark:text-neutral-200",
	 								fontWight: "bolder",
									fontSize: "1.5rem",
	 								marginTop: "0.5rem",
	 							}}
	 					
								onChange={(e: any) => {
	 								const event: any = {
	 									target: {
											value: e,
										},
									};
	 					
	 							}}
	 							
								isInputNum={true}
								numInputs={6}
	 							separator={<div style={{ marginInline: "0.5rem" }} />}
	 							containerStyle={{ direction: "ltr" }}
	 						/>
        </div>
        <div className={classes.passInput}>
          <label>New password *</label>
          <OtpInput
				
								inputStyle={{
									height: "3.2rem",
									width: "3.2rem",
	 								border: "1px solid #ECECEC",
	 								borderRadius: 4,
	 								color: "text-neutral-800 dark:text-neutral-200",
	 								fontWight: "bolder",
									fontSize: "1.5rem",
	 								marginTop: "0.5rem",
	 							}}
	 					
								onChange={(e: any) => {
	 								const event: any = {
	 									target: {
											value: e,
										},
									};
	 					
	 							}}
	 							
								isInputNum={true}
								numInputs={6}
	 							separator={<div style={{ marginInline: "0.5rem" }} />}
	 							containerStyle={{ direction: "ltr" }}
	 						/>
        </div>
        <div className={classes.passInput}>
          <label>Confirm new password *</label>
          <OtpInput
				
								inputStyle={{
									height: "3.2rem",
									width: "3.2rem",
	 								border: "1px solid #ECECEC",
	 								borderRadius: 4,
	 								color: "text-neutral-800 dark:text-neutral-200",
	 								fontWight: "bolder",
									fontSize: "1.5rem",
	 								marginTop: "0.5rem",
	 							}}
	 					
								onChange={(e: any) => {
	 								const event: any = {
	 									target: {
											value: e,
										},
									};
	 					
	 							}}
	 							
								isInputNum={true}
								numInputs={6}
	 							separator={<div style={{ marginInline: "0.5rem" }} />}
	 							containerStyle={{ direction: "ltr" }}
	 						/>
        </div>
              <ProfileButtom title='Done' mt={false} />
    </div>
  )
}

export default PasswordCard;