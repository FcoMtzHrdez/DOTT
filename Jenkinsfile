pipeline {
agent {
  docker { image 'node' }
}
  stages{
    stage('Build'){
      steps{
        sh'''
        echo "inicia build"
        ls 
        nodejs --version
        '''
      }
    }
  }
}
