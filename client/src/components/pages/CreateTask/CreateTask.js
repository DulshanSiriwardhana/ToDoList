import React from 'react'

function CreateTask() {
  return (
    <div class="h-100 d-flex align-items-center justify-content-center">
        <form style={{width:'80%'}}>
            <div class="form-group" style={{margin:'30px'}}>
            <input type="text" class="form-control" id="head" placeholder="Heading"/>
            </div>
            <div class="form-group">
            <input type="text" style={{height:'300px'}} class="mh-100 form-control" id="description" placeholder="Description"/>
            </div>
            <div class="h-100 d-flex justify-content-center" style={{margin:'10px'}}>
                <div style={{marginRight:'10px'}}>
                    <input type="datetime-local" id="starttime" name="starttime"/>
                </div>
                <div>
                <input type="datetime-local" id="endtime" name="endtime"/>
                </div>
            </div>
            <div class="form-group">
            <button class="btn btn-primary" style={{margin:'10px'}}>Save</button>
            </div>
        </form>
    </div>
  )
}

export default CreateTask