pipeline {
  agent { label 'fco' }

  stages{
    stage('Build'){
      steps{
        sh'''
        echo "inicia build"
        ls 
        nodejs --version
        cd cidr_convert_api/node
        npm install
        '''
      }
    }
        stage('SonarQ'){
          environment {
            SCANNER_HOME = tool 'sonar scanner'
          }
      steps{
        
        echo "inicia analisis"
        sh 'cd cidr_convert_api/node'
        sh'''
         $SCANNER_HOME/bin/sonar-scanner  \
        -Dsonar.organization=fcomtz \
        -Dsonar.projectKey=cidr \
        -Dsonar.sources=./cidr_convert_api/node \
        -Dsonar.host.url=https://sonarcloud.io \
        -Dsonar.exclusions=**/*.java
        '''
        
      }
    }
  }
}
