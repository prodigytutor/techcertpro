import { Button, H5, Tabs, Text } from "tamagui";

import { MyStack } from "../../components/MyStack";
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

export default function Tab2() {
  const [question, setQuestion] = useState("What is the capital of France?");

  // Function to handle the next question, etc.
  const handleNextQuestion = () => {
    // Logic to load the next question
  };
  return (
    <MyStack>
      <Tabs
        defaultValue="tab1"
        orientation="horizontal"
        flexDirection="column"
        width="100%"
      >
        <Tabs.List>
          <Tabs.Tab value="tabStudy">
            <Text>Study Mode</Text>
          </Tabs.Tab>
          <Tabs.Tab value="tabExam">
            <Text>Exam Mode</Text>
          </Tabs.Tab>
          <Tabs.Tab value="tabConfig">
            <Text>Config</Text>
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Content value="tab1">
          <H5>SubTab 1 Content</H5>
        </Tabs.Content>
        <Tabs.Content value="tab2">
          <H5>SubTab 2 Content
          <Text>{question}</Text>
          <Button onPress={handleNextQuestion} >
          title="Next Question" 
          </Button>
          </H5>
        </Tabs.Content>
        <Tabs.Content value="tab3">
          <H5>SubTab 3 Content</H5>
        </Tabs.Content>
      </Tabs>
        
    </MyStack>
  );
}
