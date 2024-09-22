import profile from './assets/profile.jpg';
import './App.css';
import { Avatar, Card, Button } from 'antd';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

function App() {

  return (
    <>
      <div>
        <a href="/">
          <Avatar className={"logo react"} size={'large'} src={profile} />
        </a>
      </div>
      <h1>Fue Her</h1>
      <Card title={"About me"}>
        <p>Self-motivated person who is passionate on learning new and emerging
          technologies with a extensive knowledge of computer science concepts and have high expectations of being
          utilized to make positive contribution to the industry.</p>
        <div style={{ paddingTop: 8 }}>
          <Button type={"link"} href={'https://www.github.com/fueher/fueher.github.io'} target={'_blank'}>
            <GithubOutlined style={{ color: 'black', fontSize: 50 }} />
          </Button>
          <Button type={"link"} href={'https://www.linkedin.com/in/fue-her-8ba2a0114/'} target={'_blank'}>
            <LinkedinOutlined style={{ fontSize: 50, color: '#0a66c2' }} />
          </Button>
        </div>
      </Card>
    </>
  );
}

export default App;
