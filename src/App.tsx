import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Title,
  RangeButton,
  CreateButton,
  Label,
  Checkbox,
  ResultPlace,
  Content,
  CopyButton,
  CopyContent
} from './components/styled.tsx'

const str: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
const specialCharacters: string = '@#$%^&*/=+?'

const App = () => {
  const [range, setRange] = useState<number>(5)
  const [check, setCheck] = useState<boolean>(false)
  const [create, setCreate] = useState<string>('')
  const [copyText, setCopyText] = useState<boolean>(false)
  const handleRange = (event: React.ChangeEvent<HTMLInputElement>) => (
    setRange(+(event.target.value))
  )
  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.checked) {
      setCheck(!check)
    } else {
      setCheck(false)
    }
  }
  const handleCreate = (): void => {
    const strAry: string[] = str.split('')
    const specialAry: string[] = (str + specialCharacters).split('')
    let result: string = ''
    for (let i = 0; i < range; i++) {
      let random = (ref: string[]) => Math.floor(Math.random() * ref.length)
      if (check) {
        result += specialAry[random(specialAry)]
      } else {
        result += strAry[random(strAry)]
      }
    }
    setCreate(result)
  }
  const handleCopy = (): void => {
    if (create) {
      setCopyText(true)
      navigator.clipboard.writeText(create)
      setTimeout(() => {
        setCopyText(false)
      }, 1500)
    }
    return
  }
  return (
    <Container>
      <Row>
        <Col>
          <Title>Password Generator</Title>
          <p>{range}</p>
          <RangeButton
            type='range'
            name='range'
            value={range}
            min={5} max={10}
            onChange={handleRange}
          />
          <CreateButton
            onClick={handleCreate}
          >
            Create
          </CreateButton>
          <Label htmlFor="check">
            <span>Include special characters</span>
            <Checkbox
              type='checkbox'
              name='check'
              id='check'
              onChange={handleCheck}
            />
          </Label>
          <ResultPlace>
            <Content
              type='text'
              value={create}
              onChange={() => ''}
              placeholder='Click on Create button'
            />
            <CopyButton
              size={20}
              onClick={handleCopy}
            />
          </ResultPlace>
          {
            copyText &&
            <CopyContent>
              <p id='copy'> Copy !</p>
            </CopyContent>
          }
        </Col>
      </Row>
    </Container>
  );
}

export default App;
