pipeline{
  agent {label 'fco'}
  stages{
    stage ('Build'){
      steps{
        sh'''
        echo "inicia build"
        '''
      }
    }
    stage ('test'){
      steps{
        echo "do something"
      }
    }
    stage ('Deploy'){
      steps{
       
        sh'''
         echo "haciendo despliegue"
         
        '''
      }
    }
  }
}
