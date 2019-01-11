pipeline {
  agent any
  stages {
    stage('Do Something') {
      steps {
        echo 'Yay!'
      }
    }
    stage('Do Something Else') {
      steps {
        dir(path: '../../src')
        pwd()
      }
    }
  }
}