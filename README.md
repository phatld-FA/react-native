### React.memo
+ Nếu như change status/value trong components thì mới thực thi
+ Chỉ nên sử dụng trong components childs
    - Vì khi sử dụng sẽ chạy 2 bước kiểm tra status - rồi sau đến code => Nên nếu sử dụng quá nhiều ảnh hưởng đến hiệu suất

### useCallback

import React, { useState, useCallback } from 'react';

useCallback(() => {
  }, []);

+ Được sử dụng để tối ưu quá trình render
+ Nếu trong có trả trị trong "[]" thì sẽ chỉ call 1 lần, ngược lại có thì sẽ call mỗi lần có thay đổi