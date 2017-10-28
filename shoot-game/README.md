一个运用二叉平衡树实现的射击游戏
============================
游戏说明：玩家通过猜测判断外星人的位置，如果猜中，则击中外星人，返回胜利画面。如果猜错，则炮弹数量减少，外星人继续接近地球。如果直到炮弹剩余量为0的时候都没有猜中，则游戏结束，地球遭遇侵略，玩家失败。(作弊：F12 控制台上查看外星人的坐标)

游戏算法:敌人的**横坐标**存储在二叉树中，用户通过猜测敌人的横坐标和纵坐标值，并对横坐标实现查找。
若查找成功，且纵坐标也匹配成功，则击中目标。否则，则更新敌人坐标值，重新渲染绘制画面。

## 流程图

![](http://on-img.com/chart_image/59b9030be4b04308eadf4dae.png)

## 游戏的界面设计

游戏舞台使用相对定位，游戏背景、玩家角色、子弹等元素均使用绝对定位，以此脱离文档流，使得彼此的位置不受HTML元素排版的影响，可以在同一位置渲染，通过设置left、right、bottom、top属性来控制元素的移动。

## 游戏逻辑主体的实现

- 随机生成十个值作为外星人的横坐标存入nodes[]数组中
	 
  	    var nodes = [];
	    for(var i = 0; i < 10; i++) {
            nodes.push(Math.floor(Math.random() * 281));
	    }

- 把数组nodes存储到二叉树中
	
		var binaryTree = new BinaryTree();
		nodes.forEach(function(key) {
			binaryTree.insert(key);
		});

- 新建一个数组nodesForAlien用来存储外星人的节点
		
		var nodesForAlien = [];
		// 此处callback传入的参数为节点node,而不是节点的值node.key
		var callback = function(node) {
            nodesForAlien.push(node);
		};
		// 先序遍历实现存储节点到数组中
		binaryTree.preOrderTraverse(callback);

- 实现外星人的横坐标与二叉树的节点连接

		var alienNodeSelect = Math.floor(Math.random() * 9);
		// selected属性作为判断是否选中
		nodeForAlien[alienNodeSelect].selected = true;
		var alienX = nodesForAlien[alienNodeSelect].key;

## 游戏图像的渲染实现

- 当玩家没有外星人则实时更新渲染各个元素的位置，通过设置left、top等属性
		alien.style.left = alienX + 'px';
		alien.style.top = alienY + 'px';

		aeroplaen.style.left = guessX + 'px';
		
		missile.style.left = guessX + 'px';
		missile.style.top = guessY + 'px';

- 当玩家击中外星人，通过覆盖外星人原来的图片位置，并隐藏原来的图片。
则渲染外星人爆炸画面
	
		explosion.style.display = 'block';
		explosion.style.left = alienX + 'px';
		explosion.style.top = alienY + 'px';

		alien.style.display = 'none';
		misslie.style.display = 'none';

## 在线预览

- [demo](https://jecyu.github.io/Front-end-development-exercise-book/shoot-game/index.html)