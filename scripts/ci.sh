set -e

for package in packages/**
do
    cd $package && yarn ci && cd -
done