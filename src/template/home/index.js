import { Text } from '@components/text';
import { auth, provider } from '@pages/firebase.js';

import { Divider } from '@mui/material';
import Dashboard from '@template/dashboard';

import { useEffect, useState } from 'react';
import {
  Content,
  IconsBox,
  LoginBox,
  MainContent,
  MainPaper,
  RowBox,
  TitleBox,
} from './styles';
import { signInWithPopup } from 'firebase/auth';
import { PageLoading } from '@components/pageLoading';

export const HomeTemplate = () => {
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    signInWithPopup(auth, provider).then((result) => {
      if (result) {
        console.log('result', result);
        setLogin({
          name: result.user.displayName,
          email: result.user.email,
          image: result.user.photoURL,
          uid: result.user.uid,
        });
      }
    });
  };

  useEffect(() => {
    setLoading(true);
    auth?.onAuthStateChanged((value) => {
      console.log('value logged', value);

      console.log('value logged if', value);
      setLogin({
        name: value.displayName,
        email: value.email,
        image: value.photoURL,
        uid: value.uid,
      });
      setLoading(false);
      // alert('Welcome back ' + value?.displayName);
    });
  }, []);

  return (
    <>
      {loading ? (
        <PageLoading pageLoading={loading} />
      ) : login ? (
        <Dashboard login={login} setLogin={setLogin} />
      ) : (
        <MainContent>
          <MainPaper elevation={2}>
            <TitleBox>
              <Text type="h5" textAlign="center">
                Welcome to my Drive Clone
              </Text>
            </TitleBox>
            <Divider />

            <Content>
              <Text
                type="subtitle2"
                textAlign="center"
                secondary
              >
                Bellow are the frameworks used to develop
                and make this project happens
              </Text>

              <IconsBox>
                <Text
                  type="caption"
                  textAlign="center"
                  secondary
                >
                  Languages
                </Text>
                <RowBox>
                  <img
                    alt="Braioso-HTML"
                    title="HTML"
                    height="30"
                    width="40"
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                  />
                  <img
                    alt="Braioso-CSS"
                    title="CSS"
                    height="30"
                    width="40"
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                  />
                  <img
                    alt="Braioso-Js"
                    title="JavaScript"
                    height="30"
                    width="40"
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
                  />
                  <img
                    alt="Braioso-Ts"
                    title="TypeScript"
                    height="30"
                    width="40"
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg"
                  />
                </RowBox>

                <Text
                  type="caption"
                  textAlign="center"
                  secondary
                >
                  Front end
                </Text>
                <RowBox>
                  <img
                    alt="Braioso-React"
                    title="React.js"
                    height="30"
                    width="40"
                    src="https://raw.githubusercontent.com/mrbraiant/devicon/00f02ef57fb7601fd1ddcc2fe6fe670fef3ae3e4/icons/react/react-original.svg"
                  />
                  <img
                    alt="Braioso-Next"
                    title="Next.js"
                    height="30"
                    width="40"
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-line.svg"
                  />
                </RowBox>

                <Text
                  type="caption"
                  textAlign="center"
                  secondary
                >
                  UI Library
                </Text>
                <RowBox>
                  <img
                    alt="Braioso-Mui"
                    title="Material UI"
                    height="30"
                    width="40"
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg"
                  />
                </RowBox>

                <Text
                  type="caption"
                  textAlign="center"
                  secondary
                >
                  Back end
                </Text>
                <RowBox>
                  <img
                    alt="Braioso-Firebase"
                    title="Firebase"
                    height="30"
                    width="40"
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg"
                  />
                </RowBox>
              </IconsBox>
              <LoginBox>
                <Text
                  type="subtitle2"
                  textAlign="center"
                  secondary
                >
                  First we need to login using Google
                </Text>
                <a onClick={(e) => handleLogin(e)} href="#">
                  Sign in with Google
                </a>
              </LoginBox>
            </Content>
          </MainPaper>
        </MainContent>
      )}
    </>
  );
};
