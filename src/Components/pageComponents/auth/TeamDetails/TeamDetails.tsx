import Image from 'next/image';
// import { Formik, Field, Form, ErrorMessage, useFormik } from 'formik';
import { Dispatch, SetStateAction } from 'react';
import styles from '@/styles/personal_detail.module.scss';
//@ts-ignore
import { Button, Input } from 'technogetic-iron-smart-ui';
import { FormDefaultPropsType, teamDetails } from '../authInterfaces';
import React, { useState, KeyboardEvent } from 'react';
import { teamsDetailSchema } from '@/utils/schema';
import { useFormik, FormikHelpers } from 'formik';

const PersonalDetail = ({ handleStepChange, currentStep }: FormDefaultPropsType) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [items, setItems] = useState<string[]>([]);
  const [error, setError] = useState<string>('');

  const handleEnterKey = (event: KeyboardEvent<HTMLInputElement>) => {
    console.log(items);
    if (event.key === 'Enter' && inputValue.trim() !== '' && items.length < 4) {
      setItems([...items, inputValue]);
      setInputValue('');
    }
    // else{
    //   alert('You can send only 3 invites');
    // }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleRemoveItem = (index: number) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  // const initialValues: teamDetails = {
  //   teamName: '',
  //   email: '',
  // };

  //   const { values, touched, errors, handleSubmit, handleChange, handleBlur, setFieldValue }= useFormik({
  //     initialValues: initialValues,
  //     validationSchema: teamsDetailSchema,
  //     onSubmit: (values: teamDetails) => {
  // console.log(values)
  //     }
  //   })

  // const formik = useFormik({
  //   initialValues: initialValues,
  //   onSubmit: (values) => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });

  

  return (
    <div>
      <form className={styles.form} >
        <div className={styles.input_box}>
          <label className={styles.email} htmlFor="email">
            <Image src="/assests/teams.svg" alt="mailogo" width={30} height={20} />
          </label>
          <Input
            id="teamName"
            className={styles.email_wrapper}
            type="text"
            name="teamName"
            autoComplete="off"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Team Name"
          />
        </div>

        <div className={styles.input_box}>
          <label className={styles.email} htmlFor="email">
            <Image src="/assests/maillogo.svg" alt="mailogo" width={30} height={20} />
          </label>
          <Input
            id="UPI_Id"
            className={styles.email_wrapper}
            type="text"
            name="UPI Id"
            autoComplete="off"
            placeholder="Invite Friends Via Mail"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleEnterKey}
          />
          <p className={styles.option}>(optional)</p>
        </div>

        {Boolean(items.length) &&
          items.map((email: string, index: number) => (
            <>
              <div className={styles.tags}>
                <div className={styles.names}>
                  <h4 className={styles.tagName}>{email}</h4>
                  <Image
                    src="/assests/cancle.svg"
                    alt="mailogo"
                    width={15}
                    height={15}
                    onClick={() => handleRemoveItem(index)}
                  />
                </div>
              </div>
            </>
          ))}

        <Button type="submit" className={styles.google_finsh} onClick={() => {}}>
          <span className={styles.nextArrow}>Finish</span>
        </Button>

        <button type="submit">Submit</button>

        <Button className={styles.finish}>
          <span className={styles.nextArrow}>Skip</span>
        </Button>
      </form>

      <div className={styles.flexGap}>
        <div className={styles.rounded}></div>
        <div className={styles.rounded}></div>
        <div className={styles.rounded}></div>
        <div className={styles.rounded}></div>
      </div>
    </div>
  );
};

export default PersonalDetail;
