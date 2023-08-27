import React , { FC}from 'react'
import classes from "./ProfileButtom.module.css";

interface ProfileButtomProps{
    title: string;
    mt:boolean;

}
const ProfileButtom :FC<ProfileButtomProps> = ({
    title,
    mt,
  
}) => {

    if(mt){
      return (
        <button className={`${classes.EditBtn} mt-96`}>
        {title}
    </button>
      )
    }

  return (
    <button className={classes.Edit}>
    {title}
</button>
  )
}

export default ProfileButtom