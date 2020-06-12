import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave'
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell'
import styled from 'styled-components'

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94a4ba;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>
          Welcome to <br /> STAR BOY!!
        </h1>
        <p>Follow our journey</p>
        <p>As we build something great!</p>

        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>More coming</h2>
      <div className="CardGroup">
        <Card title="Starting" image={require('../images/wallpaper8.jpg')} />
        <Card
          title="Making a plan"
          image={require('../images/wallpaper7.jpg')}
        />
        <Card title="Creating" image={require('../images/wallpaper6.jpg')} />
      </div>
    </div>
    <Section
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-figma.png')}
      title="React for Designers"
      text="mind to it"
    />

    <SectionCaption> Hobbies</SectionCaption>
    <SectionCellGroup>
      {' '}
      {staticdata.cells.map((cell) => (
        <Cell title={cell.title} image={cell.image} />
      ))}
    </SectionCellGroup>
  </div>
)

export default IndexPage
