import { Text } from '@/components/text';
import { MainContent, MainPaper, RowBox } from './styles';

export const HomeTemplate = () => {
  return (
    <MainContent>
      <MainPaper elevation={2}>
        <Text type="h5" textAlign="center">
          Welcome to my Drive Clone
        </Text>
        <Text type="subtitle2" textAlign="center" secondary>
          Bellow are the frameworks used to develop and
          improve this study
        </Text>

        <div style={{ textAlign: 'center' }}>
          <Text type="caption" textAlign="center">
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

          <Text type="caption" textAlign="center">
            Frameworks
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

          <Text type="caption" textAlign="center">
            Frameworks
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

          <Text type="caption" textAlign="center">
            Frameworks
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
        </div>
      </MainPaper>
    </MainContent>
  );
};
