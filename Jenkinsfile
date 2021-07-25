@Library('jenkinsfile-shared-library') _

def config = readYaml text: """
  APP: 'Demo'
  VERSION: 'v2'
  DOCKER_IMAGE: 'orejasdetrapo/app_for_demo'
  DOCKERFILE_LOCATION: 'app/.'
  SVC_NAME: 'nodejs-app'
"""


config.keySet().each {
    env."${it}" = config[it]
}

"${pipelineSelector(env)}"(env)
