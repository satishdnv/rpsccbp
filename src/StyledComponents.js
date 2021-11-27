import styled from 'styled-components'

export const AppBackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #223a5f;
  height: 100vh;
  padding: 16px;
`

export const ResultContainer = styled.div`
  background-color: transparent;
  height: 170px;
  border: 2px solid #ffffff;
  width: 300px;
  border-radius: 8px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 16px;
  @media screen and (min-width: 767px) {
    width: 700px;
  }
`
export const ResultNamesContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 130px;
`
export const ResultNames = styled.h1`
  font-family: Bree Serif;
  font-weight: 600;
  color: #ffffff;
  font-size: 25px;
  box-sizing: content-box;
`
export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 130px;
  width: 120px;
  background-color: #ffffff;
  border-radius: 10px;
`
export const ScoreName = styled.p`
  color: #223a5f;
  font-weight: 500;
  font-size: 22px;
  position: relative;
  font-family: Bree Serif;
`
export const Score = styled(ScoreName)`
  font-size: 35px;
  box-sizing: border-box;
  position: relative;
  font-family: Roboto;
`
export const GameButtonsContainer = styled.div`
  width: 330px;
  height: 320px;
  display: flex;
  list-style-type: none;
  padding: 10px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 767px) {
    width: 450px;
    height: 400px;
  }
`

export const GameButton = styled.button`
  width: 130px;
  height: 140px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 6px;
  @media screen and (min-width: 767px) {
    width: 200px;
  }
`
export const RulesButton = styled.button`
  width: 100px;
  align-self: flex-end;
  color: #223a5f;
  font-size: 20px;
  font-weight: 600;
  font-family: Bree Serif;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin-top: 10px;
`
/* export const ButtonListItem = styled.li`
  width: 130px;
  height: 140px;
  background-color: transparent;
  border: 1px solid #fff;
  cursor: pointer;
  margin: 6px;
  @media screen and (min-width: 767px) {
    width: 200px;
  }
` */

export const ButtonImage = styled.img`
  width: 100%;
`
export const RulesImage = styled(ButtonImage)`
  width: 200px;
`
export const ShowResultContainer = styled.div`
  width: 330px;
  height: 320px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 767px) {
    width: 450px;
    height: 400px;
  }
`
export const ResultImage = styled.img`
  width: 75px;
  @media screen and (min-width: 767px) {
    width: 130px;
  }
`
export const ImageContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Name = styled.h1`
  color: #ffffff;
  font-size: 18px;
  @media screen and (min-width: 767px) {
    font-size: 22px;
  }
`
export const Container = styled.div`
  width: inherit;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`
export const PlayAgainContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
export const PlayAgainButton = styled(RulesButton)`
  width: auto;
  @media screen and (min-width: 767px) {
    width: 150px;
    height: 35px;
  }
`
export const Result = styled.p`
  font-size: 25px;
  color: #ffffff;
  @media screen and (min-width: 767px) {
    font-size: 30px;
  }
`
