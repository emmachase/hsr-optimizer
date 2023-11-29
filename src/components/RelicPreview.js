import { Card, Col, Divider, Flex, Image, Row, Space, Typography } from 'antd';
import * as React from 'react';

const { Title, Paragraph, Text, Link } = Typography;

let iconSize = 23

function generateStat(stat, source, main) {
  if (!stat || !stat.stat || stat.value == null || stat.value == undefined) {
    return (
      <Flex justify='space-between'>
        <Text>
          <span>&shy;</span>
        </Text>
        <Text>
          <span>&shy;</span>
        </Text>
      </Flex>
    )
  }
  
  let displayValue = ''
  if (source = 'scorer') {
    if (stat.stat == Constants.Stats.SPD) {
      if (main) {
        displayValue = Math.floor(stat.value)
      } else {
        displayValue = stat.value.toFixed(1)
      }
    } else {
      displayValue = Utils.isFlat(stat.stat) ? Math.floor(stat.value) : (stat.value).toFixed(1) + "%"
    }   
  } else {
    displayValue = Utils.isFlat(stat.stat) ? stat.value : (stat.value).toFixed(1) + "%"
  }
  

  return (
    <Flex justify='space-between'>
      <Flex>
        <img src={Assets.getStatIcon(stat.stat)} style={{width: iconSize, height: iconSize, marginRight: 3}}></img>
        <Text>
          {Constants.StatsToReadable[stat.stat]}
        </Text>
      </Flex>
      <Text>
        {displayValue}
      </Text>
    </Flex>
  )
}

function generateScores(data) {
  if (!data || data.cs == undefined || data.ss == undefined || data.ds == undefined) {
    return (
      <Flex gap={4} justify='space-between'>
        <Text>
          <span>&shy;</span>
        </Text>
          
        <Text>
          <span>&shy;</span>
        </Text>
      </Flex>
    )
  }

  return (
    <Flex gap={4} justify='space-between'>
      <Text>
        C/S/D Score
      </Text>
        
      <Text>
        {round10ths(data.cs)}/{round10ths(data.ss)}/{round10ths(data.ds)}
      </Text>
    </Flex>
  )
}

function getRelic(relic) {
  if (!relic || !relic.id) {
    return {substats: []}
  } 

  return DB.getRelicById(relic.id)
}

let gradeToColor = {
  5: '#ba9063',
  4: '#9e5fe8',
  3: '#58beed',
  2: '#63e0ac',
}

export default function RelicPreview(props) {
  // console.log('RelicPreview', props)
  let data = getRelic(props.relic)
  if (props.source == 'scorer') {
    data = props.relic
  } else if (!data) {
    return
  }
  let enhance = data.enhance
  let part = data.part
  let set = data.set
  let grade = data.grade

  let substats = data.substats || []
  let main = data.main || {}

  let relicSrc = set ? Assets.getSetImage(set, part) : Assets.getBlank()

  let equippedBy = data.equippedBy
  let equippedBySrc = equippedBy ? Assets.getCharacterAvatarById(equippedBy) : Assets.getBlank()
  // console.log(props, data)

  let color = gradeToColor[grade] || ''

  return (
    <Card size="small" style={{ width: 200, height: 280 }}>
      <Flex vertical justify='space-between'  style={{height: 255}}>
        <Flex justify='space-between' align='center'>
          <img
            style={{height: 50, width: 50}}
            title={set} 
            src={relicSrc}
          />
          <Flex  align='center'>
            {
              grade ? 
              <div style={{width: 16, height: 16, borderRadius: '50%', background: 'rgba(0,0,0,0)', border: `2px solid ${color}`, padding: '2px', marginRight: 3}}>
                <div style={{width: 8, height: 8, backgroundColor: color, borderRadius: '50%'}}></div>
              </div> 
              : ''
              
            }
            <Text>
              {enhance ? `+${enhance}` : ''}
            </Text>
          </Flex>
          <img
            style={{height: 50, width: 50}}
            src={equippedBySrc}
          />
        </Flex>
        
        <Divider style={{margin: '6px 0px 6px 0px'}}/>
        
        {generateStat(main, props.source, true)}

        <Divider style={{margin: '6px 0px 6px 0px'}}/>

        <Flex vertical gap={0}>
          {generateStat(substats[0], props.source)}
          {generateStat(substats[1], props.source)}
          {generateStat(substats[2], props.source)}
          {generateStat(substats[3], props.source)}
        </Flex>
        

        <Divider style={{margin: '6px 0px 6px 0px'}}/>

        <Flex gap={4} justify='space-between'>
          <Flex>
            <img src={Assets.getStatIcon('CV')} style={{width: iconSize, height: iconSize, marginRight: 3}}></img>
            <Text>
              Score
            </Text>
          </Flex>
          <Text>
            55 (S)
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
}

function round10ths(x) {
  return Math.round(x);
} 

