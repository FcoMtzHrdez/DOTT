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
        stage('Static code analysis SonarQ'){
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

    stage ('Unit test'){

        steps{

            echo "Inicia test"
            sh 'pwd'
            dir ('cidr_convert_api/node'){
            sh 'nodejs --version'
            sh'npm jest -version'
            sh 'npm install jest -–save-dev'

            //sh 'npm test'//
            sh 'pwd'
          }
        }
    }

    stage ('build docker'){
        steps{
            echo "Creando docker"
            sh ' sudo docker images'
          sh 'cd cidr_convert_api/node'
          sh 'pwd'
          
          
        }
    }
  }
}
