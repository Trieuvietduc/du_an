<div class="row">
    <div class="col-12">
        <div class="card">
            <div class="card-head"></div>
            <div class="card-body">
                <form action="<?= ADMIN_URL . 'san-pham/luu-tao-moi'?>" method="post" enctype="multipart/form-data">
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group">
                              <label for="">Tên sản phấm</label>
                              <input type="text" name="name" id="" class="form-control" placeholder="" aria-describedby="helpId">
                            </div>
                            <div class="form-group">
                              <label for="">Danh mục</label>
                              <select name="cate_id" id="" class="form-control">
                                    <?php foreach($categories as $item): ?>
                                        <option value="<?= $item['id']?>"><?= $item['name']?></option>
                                    <?php endforeach ?>
                              </select>
                            </div>
                            <div class="form-group">
                              <label for="">Giá</label>
                              <input type="text" name="price" id="" class="form-control" placeholder="" aria-describedby="helpId">
                            </div>
                            <div class="form-group">
                              <label for="">Số lượng</label>
                              <input type="text" name="quantity" id="" class="form-control" placeholder="" aria-describedby="helpId">
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                              <label for="">Ảnh sản phẩm</label>
                              <input type="file" name="main_image" id="" class="form-control" placeholder="" aria-describedby="helpId">
                            </div>
                            <div class="form-group">
                              <label for="">Ảnh gallery</label>
                              <input type="file" multiple name="gallery[]" id="" class="form-control" placeholder="" aria-describedby="helpId">
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-group">
                              <label for="">Mô tả</label>
                              <textarea name="detail" class="form-control" rows="10"></textarea>
                            </div>
                        </div>
                        <div class="col-12 d-flex justify-content-end">
                            <a href="<?= ADMIN_URL ?>" class="btn btn-danger">Hủy</a>
                            &nbsp;
                            <button type="submit" class="btn btn-primary">Lưu</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>