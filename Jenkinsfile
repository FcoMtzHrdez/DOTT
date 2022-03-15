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
        export SONAR_SCANNER_VERSION=4.7.0.2747
        export SONAR_SCANNER_HOME=$HOME/.sonar/sonar-scanner-$SONAR_SCANNER_VERSION-linux
        curl --create-dirs -sSLo $HOME/.sonar/sonar-scanner.zip https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-$SONAR_SCANNER_VERSION-linux.zip
        unzip -o $HOME/.sonar/sonar-scanner.zip -d $HOME/.sonar/
        export PATH=$SONAR_SCANNER_HOME/bin:$PATH
        export SONAR_SCANNER_OPTS="-server"
        sonar-scanner \
          -Dsonar.organization=fcomtz \
          -Dsonar.projectKey=cidr \
          -Dsonar.sources=. \
          -Dsonar.host.url=https://sonarcloud.io

        '''
      }
    }
  }
}
