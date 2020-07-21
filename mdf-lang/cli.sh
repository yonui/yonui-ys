#!/bin/bash
java_path="/Users/jony/workspaces/yonyou/project/yonui-ys/mdf-lang"
resource_bas="/Users/jony/workspaces/yonyou/project/yonui-ys"
# resource_path="${resource_bas}/mdf-app/src"
resource_path="${resource_bas}/src"


java -jar /Users/jony/workspaces/yonyou/project/yonui-ys/mdf-lang/ucf-multilang-1.0.6-SNAPSHOT.jar -path ${resource_path} -configpath ${java_path}
