import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import styles from '@/styles/auth.module.scss';
import { AuthContainerProps, FormDefaultPropsType } from './authInterfaces';
import { useState } from 'react';

interface AuthType extends AuthContainerProps {
  handleStepChange: Dispatch<SetStateAction<number>>;
  currentStep: number;
}

const AuthContainer = ({
  children,
  title = 'Welcome! Please enter your details',
  subTitle = 'SubTitle',
  handleStepChange,
  currentStep,
}: AuthType) => {
  const hancdleBackBtton = () => {
    if (currentStep < 1 || currentStep === undefined) return;
    handleStepChange(currentStep - 1);
  };

  console.log('first', currentStep);

  return (
    <div className={styles.main_container}>
      <div className={styles.background_container}>
        <div className={styles.container}>
          {currentStep > 1 && (
            <div className={styles.backButton} onClick={hancdleBackBtton}>
              <Image src="/assests/backArrow.svg" alt="Tg-logo" width={15} height={15} />
            </div>
          )}
          <div className={styles.logo}>
            <Image src="/assests/logoWithBg.svg" alt="Tg-logo" width={250} height={100} />
          </div>
          <div>
            <p className={styles.heading}>{title}</p>
            <p className={styles.SubHeading}>{subTitle}</p>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthContainer;
