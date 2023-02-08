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
} from './components/styled'

const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
const specialCharacters = '@#$%^&*/=+?'

const App = () => {
  const [range, setRange] = useState(5)
  const [check, setCheck] = useState(false)
  const [create, setCreate] = useState('')
  const [copyText, setCopyText] = useState(false)
  const handleRange = (e) => (
    setRange(e.target.value)
  )
  const handleCheck = (e) => {
    if (e.target.checked) {
      setCheck(!check)
    } else {
      setCheck(false)
    }
  }
  const handleCreate = () => {
    const strAry = str.split('')
    const specialAry = (str + specialCharacters).split('')
    let result = ''
    for (let i = 0; i < range; i++) {
      let random = (ref) => Math.floor(Math.random() * ref.length)
      if (check) {
        result += specialAry[random(specialAry)]
      } else {
        result += strAry[random(strAry)]
      }
    }
    setCreate(result)
  }
  const handleCopy = () => {
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
