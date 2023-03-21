import styled from 'styled-components'
import short from '../assets/images/768.png'
import long from '../assets/images/1440.png'

export const OutermostBox=styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: url(${long}) no-repeat;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    background: url(${short}) no-repeat;
  }`

export const Countdown=styled.div`
  width: 167px;
  height: 23px;
  position: absolute;
  left: 1213px;
  top: 49px;
  font-size: 12px;
  text-align: right;
  @media screen and (max-width: 768px) {
    width: 239.36px;
    height: 37px;
    position: absolute;
    left: 59.85px;
    top: 502px;
    color: rgb(255, 255, 255);
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: 0px;
    text-align: left;
  }`
  
export const EndsIn=styled.span`
  width: 40.76px;
  height: 18px;
  color: rgb(255, 255, 255);
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: right;
  @media screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 27px;
  }`

export const TimeFrame=styled.div`
  display: inline-block;
  color: rgb(45, 39, 101);
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  width: 23px;
  height: 23px;
  background: rgb(215, 212, 252);
  font-size: 16px;
  @media screen and (max-width: 768px) {
    width: 35px;
    height: 35px;
    font-size: 24px;
    line-height: normal;
    background: rgb(215, 212, 252);
  }`
  