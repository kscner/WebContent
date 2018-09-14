pragma solidity ^0.4.24;

contract MyContract {
    address creator;
    struct Player{
      int plaintext;//0:none 1:剪刀 2：石头 3：布
      bytes32 ciphertext;
      int status;//0:undefine 1:waiting 2:finished
    }
    Player public player1 = Player(0,"",0);
    Player public player2 = Player(0,"",0);

    function start(bytes32 ciphertext) payable public returns (string){
      if(player1.status!=0) return "can not start";
      player1 = Player(0,ciphertext,1);
    }
    function play(int plaintext) payable public returns(string){
        if(keccak256(abi.encodePacked(plaintext))!=player1.ciphertext){
            return "can not play";
        }
        string memory result = getResult(plaintext,player2.plaintext);
        player1.status=0;
        player2.status=0;
        return result;

    }
    function startAndPlay(int plaintext)payable public returns(string){
        player2 = Player(plaintext,"",1);
    }

    function getResult(int plaintext1,int plaintext2) public pure returns(string){
        if(plaintext1==1&&plaintext2==2){
            return "player2 win";
        }else if(plaintext1==2&&plaintext2==3){
            return "player2 win";
        }else if(plaintext1==3&&plaintext1==1){
            return "player2 win";
        }else if(plaintext1==plaintext2){
            return "no win";
        }else {
            return "player1 win";
        }
    }
}
