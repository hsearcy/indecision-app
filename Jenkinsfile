pipeline {
  agent any
  stages {
    stage('Do Something') {
      steps {
        echo 'Yay!'
        nodejs(nodeJSInstallationName: 'Node 8', configId: '8e4bb994-85c3-48bd-b0e3-9781802824b7') {
          sh 'yarn add @gather/constants'
        }

      }
    }
    stage('Do Something Else') {
      steps {
        sh '''pwd
ls'''
      }
    }
  }
}