//转换时间


/**
			 * 
			 * 加密方法
			 */
			setMd5(name) {
				var md5 = crypto.createHash("md5")
				md5.update(name) //this.pw2这是你要加密的密码
				return md5.digest('hex') //this.pw这就是你加密完的密码，这个往后台传就行了
			},