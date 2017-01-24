class BinaryTree {
	constructor() {
		this._root=null;
	}

	insert(data) {
		var node = new Node(data);
		if(!this._root){
			this._root=node;
		} else {
			let current=this._root;
			while(true){
				if(node.data< current.data){
					if (!current.left) {
                		current.left = node;
                		break;
            		}
					current=current.left;
				} else if(node.data>current.data){
					if (!current.right) {
                		current.right = node;
                		break;
            		}
					current=current.right;
				} else{
					break;
				}
			}
			
		}

	}

	contains(data) {
		let current=this._root;
		while(current){
			if(data< current.data){
					current=current.left;
				} else if(data>current.data){
					current=current.right;
				} else {
					return true;
				}

		}
		return false;
	}

	remove(data) {
		var  ps = this.root;
		var pr = ps;
		if (this.contains(data)) {
			while ((ps != null) && (ps.data != data)) {
				pr = ps;
				if (data < ps.data) {
					ps = ps.left;
				}
				else {
					ps = ps.right;
				}
			} 
			if ((ps.left === null) && (ps.right === null)) {
				if (ps === pr) {
					this.root = null;
				}
				if (pr.left === ps) {
					pr.left = null;
				}
				else {
					pr.right = null;
				}
			}
			else if (ps.left === null) {
				if (ps === pr) {
					ps = ps.right;
				}
				if (pr.left === ps) {
					pr.left = ps.right;
				}
				else {
					pr.right = ps.right;
				}
			}
			else if (ps.right === null) {
				if (ps === pr) {
					ps = ps.left;
				}
				if (pr.left === ps) {
					pr.left = ps.left;
				}
				else {
					pr.right = ps.left;
				}
			}
			else { 
				var w = ps.right;
				var v;
				if (w.left === null) {
					w.left = ps.left;
				}
				else {
					while (w.left != NULL) {
						v = w;
						w = w.left;
					}
					v.left = w.right;
					w.right = ps.right;
					w.left = ps.left;
				}
				if (pr.left === ps) {
					pr.left = w;
				}
				else {
					pr.right = w;
				}
			}
		}

	}

	size() {
		let node = this.root;
		
		function size(node) {
			if (node === null) {
				return 0;
			}
			return size(node.left) + size(node.right) + 1;
		}
		return size(node);

	}

	isEmpty() {
		return (!this._root);
	}
}

class Node {
	constructor(data, left, right) {
		this.data = data || null;
		this.left = left || null;
		this.right = right || null;
	}
}
