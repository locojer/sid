wget -O s3.zip $1

unzip s3.zip

sample=`cat  assets.json | jq -c '.[]'`

for row in $(echo "${sample}"); do
   _jq() {
     echo ${row} | jq -r ${1}
    }
   wget -O $(_jq '.path')/$(_jq '.name') $(_jq '.url')
   echo "Downloading .. $(_jq '.name')"
done