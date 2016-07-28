
/* Exercise
 * Given a tree which represents a structure of a filesystem
 * generate DOM of the following structure:
 * (see `result.png` for a final look, you should get the same)

    <div class="directory node">
      <span class="name">Users</span>
      <div class="directory node">
        <span class="name">admin</span>
        <div class="directory node">
          <span class="name">projects</span>
          <div class="directory node">
            <span class="name">zfort-course</span>
            <div class="directory node">
              <span class="name">src</span>
              <div class="file node js">
                <span class="name">index.js</span>
              </div>
              <div class="file node js">
                <span class="name">player.js</span>
              </div>
            </div>
            <div class="directory node">
              <span class="name">dist</span>
              <div class="file node js">
                <span class="name">bundle.js</span>
              </div>
            </div>
            <div class="file node json">
              <span class="name">package.json</span>
            </div>
          </div>
        </div>
      </div>
    </div>

 * Rules:
 * 1.There are two types of entites: `directory` and `file`
 * 2. `directory` node should have `directory node` classes
 * 3. `file` node should have `file node` classes and
 *     the third class which is extension of the file (parse it from filename)
 * 4. Both `directory` and `file` nodes should have an element with class `name`
 *    which should have text value from `name` field of the node
 */

var fileSystemStructure = {
  type: 'directory',
  name: 'Users',
  children: [
    {
      type: 'directory',
      name: 'admin',
      children: [
        {
          type: 'directory',
          name: 'projects',
          children: [
            {
              type: 'directory',
              name: 'zfort-course',
              children: [
                {
                  type: 'directory',
                  name: 'src',
                  children: [
                    {
                      type: 'file',
                      name: 'index.js'
                    },
                    {
                      type: 'file',
                      name: 'player.js'
                    }
                  ]
                },
                {
                  type: 'directory',
                  name: 'dist',
                  children: [
                    {
                      type: 'file',
                      name: 'bundle.js'
                    }
                  ]
                },
                {
                  type: 'file',
                  name: 'package.json'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

function walk(node) {
  // ...
}

var dom = walk(fileSystemStructure);

document.querySelector('.file-system').appendChild(dom);

/* If you have difficulties
 * here's the answer http://jsbin.com/gopodesonu/edit?js,output
 */
