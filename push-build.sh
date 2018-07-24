#!/bin/bash

build_dir=/mnt/c/Users/JLP/Projects/jpiedra.github.io/public
deploy_dir=/mnt/c/Users/JLP/Projects/jpiedra-blog-live

if [ -d $build_dir ]
then
  echo "BUILD FOUND, DETAILS:"
  echo $(stat $build_dir)
  cd $deploy_dir && rm -rf *
  cp -rp $build_dir/* $deploy_dir
  cd $deploy_dir && git status; git add -A; git commit -m "[Scripted Deploy $(date)]"; git push
else
  echo "NO BUILD FOUND"
  echo "  Run 'hugo' to "
  echo "  create latest build"
fi


