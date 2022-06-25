<form action="<?= ADMIN_URL . 'send-email/submit' ?>" method="post">
    <div class="col-6 offset-3">
        <div class="form-group">
            <label for="">Người nhận</label>
            <input type="text" name="recceiver" class="form-control">
        </div>
        <div class="form-group">
            <label for="">Tiêu đề</label>
            <input type="text" name="subject" class="form-control">
        </div>
        <div class="form-group">
            <label for="">Nội dung</label>
            <textarea name="content" class="form-control" rows="10"></textarea>
        </div>
        <div class="d-flex justify-content-center">
            <button type="submit" class="btn btn-primary">Gửi</button>
        </div>
        <br>
    </div>
</form>