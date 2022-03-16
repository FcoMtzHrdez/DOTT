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
      steps{
        sh'''
        echo "inicia analisis"
        cd cidr_convert_api/node
             
        sonar-scanner -X \
        -Dsonar.organization=fcomtz \
        -Dsonar.projectKey=cidr \
        -Dsonar.sources=. \
        -Dsonar.host.url=https://sonarcloud.io \
        -Dsonar.exclusions=**/*.java
        '''
      }
    }
  }
}
