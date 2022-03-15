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
  }
}
