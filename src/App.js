import {Component} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {
  AppBackgroundContainer,
  ResultContainer,
  ResultNames,
  ResultNamesContainer,
  ScoreContainer,
  ScoreName,
  Score,
  GameButtonsContainer,
  GameButton,
  RulesButton,
  ButtonImage,
  RulesImage,
  ShowResultContainer,
  ResultImage,
  ImageContainer,
  Name,
  Container,
  PlayAgainContainer,
  PlayAgainButton,
  Result,
} from './StyledComponents'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    score: 0,
    result: '',
    opponentUrl: '',
    playerUrl: '',
    showResult: false,
  }

  generateRandomValue = id => {
    const number = Math.ceil(Math.random() * choicesList.length) - 1
    console.log(id)
    const randomObjectId = choicesList[number].id
    // console.log(randomObjectId)
    const playerUrlList = choicesList.filter(each => id === each.id)
    const playerUrl = playerUrlList[0].imageUrl
    const randomPlayerUrlList = choicesList.filter(
      each => randomObjectId === each.id,
    )
    const opponentUrl = randomPlayerUrlList[0].imageUrl
    let result = ''
    switch (id) {
      case 'ROCK':
        if (randomObjectId === 'ROCK') {
          result = 'IT IS DRAW'
          this.setState({result, playerUrl, opponentUrl, showResult: true})
        } else if (randomObjectId === 'PAPER') {
          result = 'YOU LOSE'
          this.setState(pre => ({
            result,
            score: pre.score - 1,
            playerUrl,
            opponentUrl,
            showResult: true,
          }))
        } else if (randomObjectId === 'SCISSORS') {
          result = 'YOU WON'
          this.setState(pre => ({
            result,
            score: pre.score + 1,
            playerUrl,
            opponentUrl,
            showResult: true,
          }))
        }
        break
      case 'PAPER':
        if (randomObjectId === 'PAPER') {
          result = 'IT IS DRAW'
          this.setState({result, playerUrl, opponentUrl, showResult: true})
        } else if (randomObjectId === 'SCISSORS') {
          result = 'YOU LOSE'
          this.setState(pre => ({
            result,
            score: pre.score - 1,
            playerUrl,
            opponentUrl,
            showResult: true,
          }))
        } else if (randomObjectId === 'ROCK') {
          result = 'YOU WON'
          this.setState(pre => ({
            result,
            score: pre.score + 1,
            playerUrl,
            opponentUrl,
            showResult: true,
          }))
        }
        break
      case 'SCISSORS':
        if (randomObjectId === 'SCISSORS') {
          result = 'IT IS DRAW'
          this.setState({result, playerUrl, opponentUrl, showResult: true})
        } else if (randomObjectId === 'ROCK') {
          result = 'YOU LOSE'
          this.setState(pre => ({
            result,
            score: pre.score - 1,
            playerUrl,
            opponentUrl,
            showResult: true,
          }))
        } else if (randomObjectId === 'PAPER') {
          result = 'YOU WON'
          this.setState(pre => ({
            result,
            score: pre.score + 1,
            playerUrl,
            opponentUrl,
            showResult: true,
          }))
        }
        break
      default:
        break
    }
  }

  clickButton = id => {
    // console.log(id)
    this.generateRandomValue(id)
  }

  renderGameResultView = () => {
    const {result, playerUrl, opponentUrl} = this.state
    return (
      <ShowResultContainer>
        <Container>
          <ImageContainer>
            <Name>YOU</Name>
            <ResultImage src={playerUrl} alt="your choice" />
          </ImageContainer>
          <ImageContainer>
            <Name>OPPONENT</Name>
            <ResultImage src={opponentUrl} alt="opponent choice" />
          </ImageContainer>
        </Container>
        <PlayAgainContainer>
          <Result>{result}</Result>
          <PlayAgainButton onClick={() => this.setState({showResult: false})}>
            PLAY AGAIN
          </PlayAgainButton>
        </PlayAgainContainer>
      </ShowResultContainer>
    )
  }

  render() {
    const {score, showResult} = this.state
    return (
      <AppBackgroundContainer>
        <ResultContainer>
          <ResultNamesContainer>
            <ResultNames>
              ROCK <br />
              PAPER <br />
              SCISSORS
            </ResultNames>
          </ResultNamesContainer>
          <ScoreContainer>
            <ScoreName>Score</ScoreName>
            <Score>{score}</Score>
          </ScoreContainer>
        </ResultContainer>
        {showResult ? (
          this.renderGameResultView()
        ) : (
          <GameButtonsContainer>
            {choicesList.map(eachChoice => (
              <GameButton
                key={eachChoice.id}
                onClick={() => this.clickButton(eachChoice.id)}
                data-testid={`${eachChoice.id.toLowerCase()}Button`}
              >
                <ButtonImage src={eachChoice.imageUrl} alt={eachChoice.id} />
              </GameButton>
            ))}
          </GameButtonsContainer>
        )}
        <Popup trigger={<RulesButton>Rules</RulesButton>} position="top left">
          <RulesImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </Popup>
      </AppBackgroundContainer>
    )
  }
}

export default App
