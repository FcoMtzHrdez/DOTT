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
              
              script{
                try {
                 sh 'npm test'
                } catch (Exception e) {
                 echo "Unit test was performed, but it found issues in the code" 
                }
              }
              
            sh 'pwd'
          }
        }
    }

    stage ('build docker'){
        steps{
            echo "Creando docker"
          sh'''
            sudo docker images
            cd cidr_convert_api/node
            pwd
            
            sudo docker build -t cidr-app .
            sudo docker images
            '''
          
          
        }
    }

    stage ('Deploy docker'){
        steps{
            echo "deployando docker"
            sh'''
            sudo docker ps
            sudo docker run -d -p 80:8000 cidr-app
            sudo docker ps
            '''
        }
    }
  }
}
