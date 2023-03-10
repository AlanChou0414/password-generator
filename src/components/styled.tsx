import styled from "styled-components"
import { RiFileCopyFill } from 'react-icons/ri'

export const Container = styled.main`
  height:100vh;
  width:100%;
  background:#252525;
`
export const Row = styled.div`
  max-width:1160px;
  margin:0 auto;
  height: 100%;
  display:flex;
  justify-content:center;
  align-items:center;
`
export const Col = styled(Row)`
  flex-direction:column;
  position:relative;
  border-radius:50px;
  width:450px;
  height:450px;
  background:#fff;
  box-shadow:0px 0px 50px 5px #fff;
`
export const Title = styled.h1`
  font-size:26px;
  font-weight:500;
  letter-spacing:1px;
  margin-bottom:5px;
`
export const RangeButton = styled.input`
  -webkit-appearance: none;
  -webkit-transition: .2s;
  transition: opacity .2s;
  border-radius:5px;
  width:300px;
  height:10px;
  background:#666;
  outline:none;
  opacity: 0.8;
  transition: opacity .3s;
  box-shadow:0px 0px 5px .2px #191919;
  &:hover {
    opacity: 1;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border:.5px solid #000;
    border-radius:50%;
    margin:2px 0px;
    background: #fff;
    cursor: pointer;
  }
  &::-moz-range-thumb {
    width: 15px;
    height: 15px;
    background: #fff;
    cursor: pointer;
  }
`
export const CreateButton = styled.button`
  margin-top:30px;
  margin-bottom:15px;
  padding:8px 40px;
  border-radius:15px;
  border:1px solid #191919;
  background:#fff;
  font-size:18px;
  letter-spacing:.5px;
  transition:.3s;
  cursor:pointer;
  &:hover {
    color:#fff;
    background:#191919; 
    opacity:.9;
  }
  &:active {
    opacity:1;
  }
`
export const Label = styled.label`
  display:flex;
  align-items:center;
  border-bottom:2px solid #fff;
  user-select: none;
  transition:.3s;
  user-select: none;
  cursor:pointer;
  &:hover {
    border-bottom:2px solid #333;
  }
`
export const Checkbox = styled.input`
  cursor:pointer;
  display:inline-block;
  margin-left:10px;
  width: 1.2em;
  height: 1.2em;
  border-radius: 0.15em;
  border: 1px solid #191919;
  outline: none;
`
export const ResultPlace = styled.div`
  display:flex;
  align-items:center;
  margin-top:15px;
  border:1px solid #191919;
  border-radius:5px;
  padding:10px 20px;
  `
export const Content = styled.input`
  all:initial;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size:16px;
  text-align:center;
`
export const CopyButton = styled(RiFileCopyFill)`
  cursor:pointer;
`
export const CopyContent = styled.div`
  position:absolute;
  color:#fff;
  font-size:18px;
  background:#333;
  opacity:.8;
  padding:0px 18px;
  border-radius:10px;
  letter-spacing:1px;
`