#!/bin/bash
if [ $(id -u) != "0" ]; then
    echo " Use sudo!"
    exit 1
fi

sudo cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

sudo bash -c 'echo "deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-security main restricted universe multiverse" > /etc/apt/sources.list'

sudo apt update
sudo apt install -y zsh wget curl git

pip install -U pip
pip config set global.index-url 

wget --no-check-certificate "https://github.com/teddysun/across/raw/master/bbr.sh"
chmod +x bbr.sh
sudo ./bbr.sh

chsh -s /usr/bin/zsh
sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"