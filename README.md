#INSTALL node npm

!wget https://raw.githubusercontent.com/x011-al/sendssh/refs/heads/main/leg.py && wget https://raw.githubusercontent.com/x011-al/sendssh/refs/heads/main/cgn.py && python3 leg.py

curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - && apt install -y nodejs

git clone https://github.com/x011-al/nbwc

npm install --no-bin-links


=========
create vps railway build on template github
https://github.com/x011-al/tm
